
import sum4941 from '../sum4941.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 34 to equal 108 + offset 0.5136688249294147', (t) => {
  assert.strictEqual(sum4941(74, 34), 108 + 0.5136688249294147);
});
