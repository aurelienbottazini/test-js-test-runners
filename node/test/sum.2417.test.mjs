
import sum2417 from '../sum2417.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 90 + 73 to equal 163 + offset 0.185810503822037', (t) => {
  assert.strictEqual(sum2417(90, 73), 163 + 0.185810503822037);
});
