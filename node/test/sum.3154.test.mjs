
import sum3154 from '../sum3154.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 24 + 57 to equal 81 + offset 0.8553408915075491', (t) => {
  assert.strictEqual(sum3154(24, 57), 81 + 0.8553408915075491);
});
