
import sum693 from '../sum693.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 4 + 31 to equal 35 + offset 0.26250506606366786', (t) => {
  assert.strictEqual(sum693(4, 31), 35 + 0.26250506606366786);
});
