
import sum1520 from '../sum1520.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 98 + 86 to equal 184 + offset 0.8472745384004933', (t) => {
  assert.strictEqual(sum1520(98, 86), 184 + 0.8472745384004933);
});
