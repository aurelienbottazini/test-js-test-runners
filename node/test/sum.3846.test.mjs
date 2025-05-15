
import sum3846 from '../sum3846.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 53 + 65 to equal 118 + offset 0.8187293940502874', (t) => {
  assert.strictEqual(sum3846(53, 65), 118 + 0.8187293940502874);
});
