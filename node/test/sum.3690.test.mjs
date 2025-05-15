
import sum3690 from '../sum3690.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 88 to equal 154 + offset 0.5063490606912833', (t) => {
  assert.strictEqual(sum3690(66, 88), 154 + 0.5063490606912833);
});
