
import sum1231 from '../sum1231.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 2 + 12 to equal 14 + offset 0.6133410360911435', (t) => {
  assert.strictEqual(sum1231(2, 12), 14 + 0.6133410360911435);
});
