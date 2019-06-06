package StepDefinitions;

/*
* Base Class consisting of helper methods.
* */
public class UtilBase {


    static String baseUrl ="https://api.weather.gov/points/";
    static String singleCoordinate="30.0064";
    static int unAuthorizedActionCode=403;
    static int validStatusCode=200;
    static int errorStatusCode=404;



    public static String getBaseUrl() {
        return baseUrl;
    }

    public static String getSingleCoordinate() {
        return singleCoordinate;
    }

    public static int getUnAuthorizedActionCode() {
        return unAuthorizedActionCode;
    }

    public static int getValidStatusCode() {
        return validStatusCode;
    }

    public static int getErrorStatusCode() {
        return errorStatusCode;
    }
}
