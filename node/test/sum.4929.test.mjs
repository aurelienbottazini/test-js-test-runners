
import sum4929 from '../sum4929.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 46 to equal 75 + offset 0.18572104848784998', (t) => {
  assert.strictEqual(sum4929(29, 46), 75 + 0.18572104848784998);
});
