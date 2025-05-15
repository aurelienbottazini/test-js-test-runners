
import sum2454 from '../sum2454.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 78 + 48 to equal 126 + offset 0.8931774276228184', (t) => {
  assert.strictEqual(sum2454(78, 48), 126 + 0.8931774276228184);
});
