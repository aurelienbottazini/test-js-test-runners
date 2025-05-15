
import sum4868 from '../sum4868.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 36 to equal 76 + offset 0.5530668156537816', (t) => {
  assert.strictEqual(sum4868(40, 36), 76 + 0.5530668156537816);
});
