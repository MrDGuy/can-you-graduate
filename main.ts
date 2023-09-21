let has_enough_units = game.ask("Do you have enough credits?", "OK = True, Cancel = False")
let has_met_requirements = game.ask("Have you met the requirements", "OK = True, Cancel = False")
if (has_enough_units && has_met_requirements) {
    adventure.addToTextlog("You can graduate.")
} else {
    adventure.addToTextlog("You cannot graduate.")
}

