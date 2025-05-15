
import sum4239 from '../sum4239.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 27 + 32 to equal 59 + offset 0.8014949386351801', (t) => {
  assert.strictEqual(sum4239(27, 32), 59 + 0.8014949386351801);
});
