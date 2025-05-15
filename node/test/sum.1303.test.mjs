
import sum1303 from '../sum1303.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 85 to equal 97 + offset 0.8089278985389847', (t) => {
  assert.strictEqual(sum1303(12, 85), 97 + 0.8089278985389847);
});
