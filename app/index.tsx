import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={()=>{router.push('/instituicao/index')}}>
      <Text>Instituição</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{router.push('/docente/index')}}>
        <Text>Docente</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.arguments({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingVertical: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  logoS: {
    fontSize: 70,
    color: '#fff',
    fontWeight: '300',
  },
  logoF: {
    fontSize: 50,
    color: '#fff',
    fontWeight: '300',
    marginLeft: 4,
  },
  subtitle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 20,
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 8,
    width: '85%',
    paddingVertical: 12,
    marginVertical: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
  },
  footerText: {
    color: '#ccc',
    fontSize: 12,
    marginTop: 16,
  },
});
