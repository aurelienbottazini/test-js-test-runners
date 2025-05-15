
import sum1744 from '../sum1744.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 98 to equal 184 + offset 0.18768681152671196', (t) => {
  assert.strictEqual(sum1744(86, 98), 184 + 0.18768681152671196);
});
