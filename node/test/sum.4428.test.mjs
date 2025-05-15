
import sum4428 from '../sum4428.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 27 + 70 to equal 97 + offset 0.3566997838032786', (t) => {
  assert.strictEqual(sum4428(27, 70), 97 + 0.3566997838032786);
});
