
import sum688 from '../sum688.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 55 to equal 84 + offset 0.20915603264869664', (t) => {
  assert.strictEqual(sum688(29, 55), 84 + 0.20915603264869664);
});
