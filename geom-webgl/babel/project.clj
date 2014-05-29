(defproject thi.ng/geom-webgl "0.3.0-SNAPSHOT"
  :description "thi.ng geometry kit - WebGL module"
  :url "https://github.com/thi-ng/geom"
  :license {:name "Apache Software License"
            :url "http://www.apache.org/licenses/LICENSE-2.0"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [thi.ng/geom-core "0.3.0-SNAPSHOT"]
                 [thi.ng/geom-types "0.3.0-SNAPSHOT"]
                 [thi.ng/geom-meshops "0.3.0-SNAPSHOT"]]

  :profiles {:dev {:dependencies [[org.clojure/clojurescript "0.0-2202"]
                                  [criterium "0.4.3"]]
                   :plugins [[lein-cljsbuild "1.0.3"]
                             [com.cemerick/clojurescript.test "0.2.2"]
                             [com.cemerick/austin "0.1.4"]]
                   :aliases {"cleantest" ["do" "clean," "cljsbuild" "test"]}}}

  :cljsbuild {:builds [{:source-paths ["src" "test"]
                        :id "simple"
                        :compiler {:output-to "target/geom-webgl-0.3.0-SNAPSHOT.js"
                                   :optimizations :whitespace
                                   :pretty-print true}}
                       {:source-paths ["src" "test"]
                        :id "prod"
                        :compiler {:output-to "target/geom-webgl-0.3.0-SNAPSHOT.js"
                                   :optimizations :advanced
                                   :pretty-print false}}]
              :test-commands {"unit-tests" ["phantomjs" :runner "target/geom-webgl-0.3.0-SNAPSHOT.js"]}}

  :pom-addition [:developers [:developer
                              [:name "Karsten Schmidt"]
                              [:url "http://postspectacular.com"]
                              [:timezone "0"]]])
