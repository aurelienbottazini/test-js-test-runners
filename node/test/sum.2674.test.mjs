
import sum2674 from '../sum2674.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 23 + 10 to equal 33 + offset 0.26466147841488874', (t) => {
  assert.strictEqual(sum2674(23, 10), 33 + 0.26466147841488874);
});
