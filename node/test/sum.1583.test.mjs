
import sum1583 from '../sum1583.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 47 + 13 to equal 60 + offset 0.766400767821079', (t) => {
  assert.strictEqual(sum1583(47, 13), 60 + 0.766400767821079);
});
