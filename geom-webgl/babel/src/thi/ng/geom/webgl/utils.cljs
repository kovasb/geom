(ns thi.ng.geom.webgl.utils
  (:require
    [thi.ng.geom.webgl.arrays :as arrays]
    [thi.ng.common.error :as err])
  (:require-macros
    [thi.ng.macromath.core :as mm]))

  (defn get-script-text
    [id]
    (if-let [e (.getElementById js/document id)]
      (.-text e)
      (err/illegal-arg! (str "Unknown DOM element: " id))))
  (defn loop-kv
    "A combination of map & doseq specialized for maps. Takes a function `f` and
    a map, calls `f` with each key & value, discards results."
    [f xs]
    (loop [xs xs]
      (if xs
        (let [x (first xs)]
          (f (nth x 0) (nth x 1))
          (recur (next xs))))))
