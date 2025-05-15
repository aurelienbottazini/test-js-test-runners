
import sum3977 from '../sum3977.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 51 to equal 86 + offset 0.8975504911146172', (t) => {
  assert.strictEqual(sum3977(35, 51), 86 + 0.8975504911146172);
});
