
import sum3990 from '../sum3990.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 16 to equal 27 + offset 0.6349043353246339', (t) => {
  assert.strictEqual(sum3990(11, 16), 27 + 0.6349043353246339);
});
