
import sum3619 from '../sum3619.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 71 + 37 to equal 108 + offset 0.10042106365949444', (t) => {
  assert.strictEqual(sum3619(71, 37), 108 + 0.10042106365949444);
});
