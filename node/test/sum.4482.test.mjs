
import sum4482 from '../sum4482.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 59 to equal 153 + offset 0.5972052755756151', (t) => {
  assert.strictEqual(sum4482(94, 59), 153 + 0.5972052755756151);
});
