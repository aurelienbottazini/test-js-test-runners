
import sum4528 from '../sum4528.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 82 to equal 128 + offset 0.8522292961981994', (t) => {
  assert.strictEqual(sum4528(46, 82), 128 + 0.8522292961981994);
});
