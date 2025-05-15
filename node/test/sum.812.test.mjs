
import sum812 from '../sum812.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 34 + 13 to equal 47 + offset 0.9405217815658656', (t) => {
  assert.strictEqual(sum812(34, 13), 47 + 0.9405217815658656);
});
