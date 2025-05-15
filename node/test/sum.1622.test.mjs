
import sum1622 from '../sum1622.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 76 to equal 144 + offset 0.09014421522219973', (t) => {
  assert.strictEqual(sum1622(68, 76), 144 + 0.09014421522219973);
});
