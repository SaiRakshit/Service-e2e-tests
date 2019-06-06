package StepDefinitions;

/*
* Base Class consisting of helper methods.
* */
public class UtilBase {


    static String baseUrl ="https://api.weather.gov/points/";
    static String singleCoordinate="30.0064";

    public static String getBaseUrl() {
        return baseUrl;
    }

    public static String getSingleCoordinate() {
        return singleCoordinate;
    }


}
