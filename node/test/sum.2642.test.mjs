
import sum2642 from '../sum2642.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 89 to equal 122 + offset 0.631346592508737', (t) => {
  assert.strictEqual(sum2642(33, 89), 122 + 0.631346592508737);
});
