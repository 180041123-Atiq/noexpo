import React,{useState} from 'react';
import { View,Text,TextInput,Button,Alert } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'UserDatabase.db' });

const TorJonno = ({navigation}) => {

    const [name,setName] = useState('');
    const [id,setId] = useState('');
    const [upname,setUpname] = useState('');

    const handleCreateTable = () => {

        db.transaction((txn)=>{
            txn.executeSql(
                "SELECT name from sqlite_master WHERE type='table' AND name='table_shoe'",
                [],
                (tx,results) => {
                    console.log('len : ',results.rows.length);
                    if(results.rows.length==0) {
                        txn.executeSql('DROP TABLE IF EXISTS table_shoe', []);
                        txn.executeSql(
                          'CREATE TABLE IF NOT EXISTS table_shoe(id INTEGER PRIMARY KEY AUTOINCREMENT,name VARCHAR(20))',
                          []
                        ); 
                    }
                }
            )
        })

    };

    const handleDeleteTable = () => {

        db.transaction((txn)=>{
            txn.executeSql(
                "DROP TABLE IF EXISTS table_shoe",
                [],
                (tx,res)=>console.log(res)
            )
        });

    }

    const handleInsert = () => {

        db.transaction((tx) => {
            tx.executeSql(
              'INSERT INTO table_shoe (name) VALUES (?)',
              [name],
              (tx, results) => {
                console.log('Results', results.rowsAffected);
                if (results.rowsAffected > 0) {
                  Alert.alert(
                    'Success',
                    'You are Registered Successfully',
                    [
                      {
                        text: 'Ok',
                        onPress: () => console.log('Mushfiq becomes happy')
                      },
                      {
                          text: 'No',
                          onPress: () => console.log('Mushfiq becomes sad')
                      }
                    ],
                    { cancelable: false }
                  );
                } else alert('Registration Failed');
              }
            );
        });

    }

    const handleViewAll = () => {

        db.transaction((tx) => {
            tx.executeSql(
              'SELECT * FROM table_shoe',
              [],
              (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                  temp.push(results.rows.item(i));
                console.log(temp);
              }
            );
        });

    }

    const handleDelete = () => {

        if(id=='')return ;

        db.transaction((tx) => {
            tx.executeSql(
              'DELETE FROM  table_shoe where id=?',
              [parseInt(id)],
              (tx, results) => {
                console.log('Results', results.rowsAffected);
                if (results.rowsAffected > 0) {
                  Alert.alert(
                    'Success',
                    'User deleted successfully',
                    [
                      {
                        text: 'Ok',
                        onPress: () => console.log('Mushfiq is happy'),
                      },
                    ],
                    { cancelable: false }
                  );
                } else {
                  alert('Please insert a valid User Id');
                }
              }
            );
        });

    }

    const handleUpdate = () => {

        if(upname==''||id=='')return ;

        db.transaction((tx) => {
            tx.executeSql(
              'UPDATE table_shoe set name=? where id=?',
              [upname,parseInt(id)],
              (tx, results) => {
                console.log('Results', results.rowsAffected);
                if (results.rowsAffected > 0) {
                  Alert.alert(
                    'Success',
                    'User updated successfully',
                    [
                      {
                        text: 'Ok',
                        onPress: () => console.log('Mushiq becomes happy'),
                      },
                    ],
                    { cancelable: false }
                  );
                } else alert('Updation Failed');
              }
            );
        });

    }

    return (
        <View style={{flex:1,padding:20,justifyContent:'space-around'}}>
            <Button
                title="create table"
                onPress={handleCreateTable}
            />
            <Button
                title="delete table"
                onPress={handleDeleteTable}
            />
            <Button
                title="View All"
                onPress={handleViewAll}
            />
            <Button
                title="insert"
                onPress={handleInsert}
            />
            <TextInput
                placeholder="Enter name"
                onChangeText={setName}
                value={name}
            />
            <Button
                title="update"
                onPress={handleUpdate}
            />
            <TextInput
                placeholder="Enter updated name"
                onChangeText={setUpname}
                value={upname}
            />
            <Button
                title="Delete"
                onPress={handleDelete}
            />
            <TextInput
                placeholder="Enter id"
                onChangeText={setId}
                value={id}
            />
        </View>
    )
}

export default TorJonno;