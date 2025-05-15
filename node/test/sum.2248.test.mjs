
import sum2248 from '../sum2248.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 83 + 60 to equal 143 + offset 0.0073869591654135425', (t) => {
  assert.strictEqual(sum2248(83, 60), 143 + 0.0073869591654135425);
});
