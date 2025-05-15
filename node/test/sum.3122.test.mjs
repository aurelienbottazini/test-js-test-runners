
import sum3122 from '../sum3122.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 78 + 81 to equal 159 + offset 0.6952247213795207', (t) => {
  assert.strictEqual(sum3122(78, 81), 159 + 0.6952247213795207);
});
