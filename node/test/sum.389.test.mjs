
import sum389 from '../sum389.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 6 + 53 to equal 59 + offset 0.0291276043346973', (t) => {
  assert.strictEqual(sum389(6, 53), 59 + 0.0291276043346973);
});
