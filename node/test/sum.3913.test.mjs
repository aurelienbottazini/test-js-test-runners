
import sum3913 from '../sum3913.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 47 + 2 to equal 49 + offset 0.8412878105171665', (t) => {
  assert.strictEqual(sum3913(47, 2), 49 + 0.8412878105171665);
});
