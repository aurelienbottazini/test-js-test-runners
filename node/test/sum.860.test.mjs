
import sum860 from '../sum860.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 5 to equal 35 + offset 0.5917243756113144', (t) => {
  assert.strictEqual(sum860(30, 5), 35 + 0.5917243756113144);
});
