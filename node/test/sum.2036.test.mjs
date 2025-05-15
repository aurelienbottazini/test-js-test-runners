
import sum2036 from '../sum2036.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 67 to equal 129 + offset 0.8111078453940435', (t) => {
  assert.strictEqual(sum2036(62, 67), 129 + 0.8111078453940435);
});
