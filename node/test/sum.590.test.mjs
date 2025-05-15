
import sum590 from '../sum590.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 72 + 73 to equal 145 + offset 0.29574719774039626', (t) => {
  assert.strictEqual(sum590(72, 73), 145 + 0.29574719774039626);
});
