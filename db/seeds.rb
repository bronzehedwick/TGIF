require 'csv'

# shows
full_house = Show.create(name: "Full House", description: "After the death of his wife Pam, sports anchor Danny Tanner recruits his brother-in-law Jesse, a rock musician, and his best friend since childhood, Joey, who works as a stand-up comedian, to help raise his three young daughters. Over time, the three men, as well as the children, bond and become closer to one another.", image_url: "placeholder")
family_matters = Show.create(name: "Family Matters", description: "What matters most? Family, of course! Over its nine hit seasons, Family Matters brings us a hilarious slice of middle-class Americana -- along with one of TV's wackiest characters, nerdy genius Steve Urkel. The extended Winslow family redefines the word 'togetherness' as their home splits at the seams with chaos, confusion and laughter.", image_url: "placeholder")
perfect_strangers = Show.create(name: "Perfect Strangers", description: "The series chronicles the relationship of Larry Appleton and his distant cousin Balki Bartokomous. Larry, a Wisconsin native from a large family, has just moved into his first apartment in Chicago, and is savoring his first taste of privacy when Balki, a hitherto-unknown cousin from a Mediterranean island, Mypos, arrives intending to move in with him.", image_url: "placeholder")
just_ten = Show.create(name: "Just the Ten of Us", description: "The series focuses on Graham Lubbock, a Catholic gym teacher who used to teach at the high school that Growing Pains characters Mike and Carol Seaver had attended on Long Island, and the father of eight children.", image_url: "placeholder")
going_places = Show.create(name: "Going Places", description: "The production staff of The Dick Roberts Show has its hands full booking guests for the outrageous talk show and dealing with its egomaniacal host. After work, Charlie, Jack, Alex and Kate share a house together with Kate's 8-year-old nephew Nick, who is quite a handful himself.", image_url: "placeholder")
step_by_step = Show.create(name: "Step By Step", description: "When two mismatched single parents fall in love, marry and move in together with their six mismatched kids, they hope it's only a matter of time until they all come to love their new life.	", image_url: "placeholder")
baby_talk = Show.create(name: "Baby Talk", description: "Baby Talk featured the adventures of Baby Mickey, as he commented to the audience on the misgivings and new wonders of his world.", image_url: "placeholder")
dinosaurs = Show.create(name: "Dinosaurs", description: "Meet the Sinclairs -- the funniest family in 60 million years! They're just your average family with one BIG difference. They're dinosaurs, living the good life in sixty million and three B.C.! Daddy Earl, his wife Fran, their kids Robbie, Charlene, and the Baby, and feisty Grandma Ethyl bring a hilarious Jurassic twist to daily life.", image_url: "placeholder")
billy = Show.create(name: "Billy", description: "Following the end of the show this was spun-off of, Head of the Class, Billy moves to Berkeley, California, where he marries Mary Springer, a single mom with several children, so he could get his green card. The marriage is arranged in order to prevent Billy from being deported back to the UK. Billy becomes Mary's boarder, living in her basement apartment with the strictest of rules: no drinking, no smoking, no pets, and no sex. The series follows Billy's misadventures as he adjusts to life in California while staying one step ahead of immigration officials seeking to prove his marriage is a sham.", image_url: "placeholder")
getting_by = Show.create(name: "Getting By", description: "Two very different single mothers work for the Chicago Welfare Office. In order to save money, the two decide to combine their families and share a home.", image_url: "placeholder")
where_i_live = Show.create(name: "Where I Live", description: "The series starred Doug E. Doug as Douglas St. Martin, a Trinidadian American teenager living in the Harlem section of New York City. He lived with his caring, hard-working parents and his younger sister. Much of the show focused on Douglas's misadventures with his best friends.", image_url: "placeholder")
camp_wilder = Show.create(name: "Camp Wilder", description: "Ricky Wilder has been through a bad marriage and is now raising a young daughter. When her parents die, she moves back to her old home to be the guardian to her two teenage siblings. As if that wasn't difficult enough, her brother's eccentric best friend always drops in to add to the hilarity.", image_url: "placeholder")
boy_meets_world = Show.create(name: "Boy Meets World", description: "An adolescent with two siblings tests his various theories about life as he endures the trials of growing up alongside a good friend.", image_url: "placeholder")
hangin_with_mr_cooper = Show.create(name: "Hangin' With Mr. Cooper", description: "Life couldn't be better for Mark Cooper. He's charming, funny, playful and athletic--a really great guy ... And he'll be the first to tell you so! Just out of school and on his own for the first time, Mark shares a house with two beautiful women. The former college basketball superstar and ultimate prankster also happens to be the coolest substitute teacher around in Hangin' With Mr. Cooper.", image_url: "placeholder")
sister_sister = Show.create(name: "Sister, Sister", description: "Sister, Sister is a half-hour comedy series which chronicles the adventures of a reunited set of identical twins, Tia Landry and Tamera Campbell. The teens live with their adoptive parents, conservative businessman Ray Campbell and brassy, outspoken Lisa Landry in the suburbs of Detroit. Together, this unconventional blended family is learning lessons in life, laughter and love.", image_url: "placeholder")
on_our_own = Show.create(name: "On Our Own", description: "When the seven Jerrico siblings are left orphaned by a tragic accident, eldest brother Josh takes charge, determined that the family won't be split up and put into foster care.", image_url: "placeholder")

#program years
year1989 = ProgramYear.create(name: 'Fall 1989 - Spring 1990', start_date: '1989-09-22', end_date: '1990-05-04')
year1990 = ProgramYear.create(name: 'Fall 1990 - Spring 1991', start_date: '1990-09-21', end_date: '1991-05-03')
year1991 = ProgramYear.create(name: 'Fall 1991 - Spring 1992', start_date: '1991-09-20', end_date: '1992-05-08')
year1992 = ProgramYear.create(name: 'Fall 1992 - Spring 1993', start_date: '1992-09-18', end_date: '1993-05-21')
year1993 = ProgramYear.create(name: 'Fall 1993 - Spring 1994', start_date: '1993-09-24', end_date: '1994-05-20')
year1994 = ProgramYear.create(name: 'Fall 1994 - Spring 1995', start_date: '1994-09-23', end_date: '1995-05-19')

# test data for episodes
fhtest1 = Episode.create(show: full_house, name: "Full House Test 1", episode_num: 1, season: 1, original_air_date: '1987-09-18', synopsis: "Test synopsis", program_year: year1989)
fmtest1 = Episode.create(show: family_matters, name: "Family Matters Test 1", episode_num: 1, season: 1, original_air_date: '1987-09-18', synopsis: "Test synopsis", program_year: year1989)
pstest1 = Episode.create(show: perfect_strangers, name: "Perfect Strangers Test 1", episode_num: 1, season: 1, original_air_date: '1987-09-18', synopsis: "Test synopsis", program_year: year1989)
j10test1 = Episode.create(show: just_ten, name: "Just the Ten of Us Test 1", episode_num: 1, season: 1, original_air_date: '1987-09-18', synopsis: "Test synopsis", program_year: year1989)
gptest1 = Episode.create(show: going_places, name: "Going Places Test 1", episode_num: 1, season: 1, original_air_date: '1987-09-18', synopsis: "Test synopsis", program_year: year1989)
sbstest1 = Episode.create(show: step_by_step, name: "Step By Step Test 1", episode_num: 1, season: 1, original_air_date: '1987-09-18', synopsis: "Test synopsis", program_year: year1989)
bttest1 = Episode.create(show: baby_talk, name: "Baby Talk Test 1", episode_num: 1, season: 1, original_air_date: '1987-09-18', synopsis: "Test synopsis", program_year: year1989)
dinotest1 = Episode.create(show: dinosaurs, name: "Dinosaurs Test 1", episode_num: 1, season: 1, original_air_date: '1987-09-18', synopsis: "Test synopsis", program_year: year1989)
billytest1 = Episode.create(show: billy, name: "Billy Test 1", episode_num: 1, season: 1, original_air_date: '1987-09-18', synopsis: "Test synopsis", program_year: year1989)
gbtest1 = Episode.create(show: getting_by, name: "Getting By Test 1", episode_num: 1, season: 1, original_air_date: '1987-09-18', synopsis: "Test synopsis", program_year: year1989)
wiltest1 = Episode.create(show: where_i_live, name: "Where I Live Test 1", episode_num: 1, season: 1, original_air_date: '1987-09-18', synopsis: "Test synopsis", program_year: year1989)
cwtest1 = Episode.create(show: camp_wilder, name: "Camp Wilder Test 1", episode_num: 1, season: 1, original_air_date: '1987-09-18', synopsis: "Test synopsis", program_year: year1989)
bmwtest1 = Episode.create(show: boy_meets_world, name: "Boy Meets World Test 1", episode_num: 1, season: 1, original_air_date: '1987-09-18', synopsis: "Test synopsis", program_year: year1989)
hwmctest1 = Episode.create(show: hangin_with_mr_cooper, name: "Hangin' with Mr. Cooper Test 1", episode_num: 1, season: 1, original_air_date: '1987-09-18', synopsis: "Test synopsis", program_year: year1989)
sstest1 = Episode.create(show: sister_sister, name: "Sister Sister Test 1", episode_num: 1, season: 1, original_air_date: '1987-09-18', synopsis: "Test synopsis", program_year: year1989)
oootest1 = Episode.create(show: on_our_own, name: "On Our Own Test 1", episode_num: 1, season: 1, original_air_date: '1987-09-18', synopsis: "Test synopsis", program_year: year1989)

#weeks
weeks_csv_text = File.read(Rails.root.join('db', 'TGIF Weeks.csv'))
weeks_text = CSV.parse(weeks_csv_text, :headers => true, :encoding => 'ISO-8859-1')
weeks_text.each do |row|
  w = Week.new
  w.program_year_id = row['program_year_id']
  w.week_num = row['week_num']
  w.friday_date = row['friday_date']
  w.save
end