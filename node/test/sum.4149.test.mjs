
import sum4149 from '../sum4149.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 71 to equal 106 + offset 0.5138814964371308', (t) => {
  assert.strictEqual(sum4149(35, 71), 106 + 0.5138814964371308);
});
