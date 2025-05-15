
import sum2494 from '../sum2494.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 57 + 76 to equal 133 + offset 0.9534619617102854', (t) => {
  assert.strictEqual(sum2494(57, 76), 133 + 0.9534619617102854);
});
