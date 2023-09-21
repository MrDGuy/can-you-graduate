has_enough_units = game.ask("Do you have enough credits?", "OK = True, Cancel = False")
has_met_requirements = game.ask("Have you met the requirements", "OK = True, Cancel = False")

if has_enough_units and has_met_requirements:
    adventure.add_to_textlog("You can graduate.")
else:
    adventure.add_to_textlog("You cannot graduate.")
