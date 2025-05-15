
import sum2468 from '../sum2468.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 19 + 32 to equal 51 + offset 0.46431983487902084', (t) => {
  assert.strictEqual(sum2468(19, 32), 51 + 0.46431983487902084);
});
