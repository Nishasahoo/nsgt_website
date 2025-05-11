<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $phone = htmlspecialchars($_POST['phone'] ?? 'N/A');
    $course = htmlspecialchars($_POST['course'] ?? 'N/A');
    $flag = htmlspecialchars($_POST['flag'] ?? 'N/A');
    $selected = htmlspecialchars($_POST['selected'] ?? 'N/A');

    $to = "nishasahoon99@gmail.com"; // ✅ Replace with your email
    $subject = "Group Discount Submission";
    $message = "A user submitted the Group Discount form:\n\n"
        . "Phone: $phone\n"
        . "Course: $course\n"
        . "Country: $flag\n"
        . "Selected Discount: $selected%\n";

    $headers = "From: no-reply@yourdomain.com\r\n";
    $headers .= "Reply-To: $to\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "success";
    } else {
        echo "Mail sending failed!";
    }
} else {
    echo "Invalid request.";
}
?>
