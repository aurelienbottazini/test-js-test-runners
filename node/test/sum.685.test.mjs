
import sum685 from '../sum685.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 82 + 48 to equal 130 + offset 0.772217800122792', (t) => {
  assert.strictEqual(sum685(82, 48), 130 + 0.772217800122792);
});
