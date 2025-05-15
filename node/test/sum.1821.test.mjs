
import sum1821 from '../sum1821.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 71 to equal 159 + offset 0.3441242044746299', (t) => {
  assert.strictEqual(sum1821(88, 71), 159 + 0.3441242044746299);
});
