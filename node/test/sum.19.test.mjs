
import sum19 from '../sum19.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 80 to equal 106 + offset 0.3168488589564994', (t) => {
  assert.strictEqual(sum19(26, 80), 106 + 0.3168488589564994);
});
