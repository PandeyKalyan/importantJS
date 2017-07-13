function personalDetails() {
    this.name="Kalyan";
    this.gender = "male";
    this.color = "brown";
}

personalDetails.prototype = {
    setName: function(name) {
        this.name = name;
        return this;
    },
    setGender: function(gender) {
        this.gender = gender;
        return this;
    },
    setColor: function(color) {
        this.color = color;
        return this;
    },
    displayDetails: function() {
        console.log("Name: " + this.name + " Gender: " + this.gender + " Color: " + this.color);
    }
}

var newPerson = new personalDetails();
newPerson.displayDetails();
newPerson.setName("Sita").setGender("Female").setColor("Black");
newPerson.displayDetails();