import java.io.File;
  
public class FileCreator {
    public static void main(String args[])
    {
        try {
            // Возьмите файл
            File f = new File("D:\\example.txt");
              //Создайте новый файл
            // Убедитесь, что он не существует 
            if (f.createNewFile())
                System.out.println("File created");
            else
                System.out.println("File already exists");
        }
        catch (Exception e) {
            System.err.println(e);
        }
    }
}
