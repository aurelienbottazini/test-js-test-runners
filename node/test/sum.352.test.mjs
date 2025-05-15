
import sum352 from '../sum352.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 84 + 59 to equal 143 + offset 0.9792505182390003', (t) => {
  assert.strictEqual(sum352(84, 59), 143 + 0.9792505182390003);
});
