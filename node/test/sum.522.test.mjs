
import sum522 from '../sum522.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 30 to equal 85 + offset 0.38474483791211056', (t) => {
  assert.strictEqual(sum522(55, 30), 85 + 0.38474483791211056);
});
