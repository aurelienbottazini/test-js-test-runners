
import sum1761 from '../sum1761.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 75 + 11 to equal 86 + offset 0.5436338591678267', (t) => {
  assert.strictEqual(sum1761(75, 11), 86 + 0.5436338591678267);
});
